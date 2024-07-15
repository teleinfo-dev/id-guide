## 挑战方法

#### 说明

方法名：
```java
DoipReturn<String> challenge(@RequestParam(value = "handle") String handle);
```

方法说明：该方法用于获取挑战信息，为一随机nonce值

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  handle  |  String  |  是  |  255  |  要查询的标识  |  88.608.8889/App\_wscapp  |

#### 返回参数

|  **名称**  |  **类型**  |  **必选**  |  **约束**  |  **中文名**  |  **说明**  |
| --- | --- | --- | --- | --- | --- |
|  code  |  integer  |  true  |  none  |  none  |  返回码  |
|  message  |  string  |  true  |  none  |  none  |  返回消息  |
|  data  |  object  |  true  |  none  |  none  |  返回数据  |

#### 示例

#### 请求示例代码  
```java  
@Test
void challengeTest() {
    new OpenApiClient().challenge(handle, url);
}

//方法
public String challenge(String handle, String url) {

    // 构建挑战应答API
    this.challengeResponseApi = Feign.builder()
        .encoder(encoder)
        .decoder(responseEntityDecoder)
        .contract(contract)
        .retryer(Retryer.NEVER_RETRY)
        .target(ChallengeResponseApi.class, url);
    // 挑战
    DoipReturn < String > challengeResponse = challengeResponseApi.challenge(handle);
    String random = challengeResponse.getData();
    log.info("{} 挑战成功！返回结果{}", handle, challengeResponse);
    return random;

}
```

#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": "4870"
}
```

## 应答，颁发Token

#### 说明

方法名：
```java
DoipReturn<Map<String,Object>> verifyResponse(@RequestBody VerifyResponseDTO verifyResponseDTO);
```

方法说明：该接口用于验证使用nonce值生成的signature，验证成功则颁发token

#### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |
| --- | --- | --- | --- | --- |
|  handle  |  body  |  string  |  是  |  标识  |
|  signature  |  body  |  string  |  是  |  签名  |

#### 返回参数

|  **名称**  |  **类型**  |  **必选**  |  **约束**  |  **中文名**  |  **说明**  |
| --- | --- | --- | --- | --- | --- |
|  code  |  integer  |  true  |  none  |  none  |  返回码  |
|  message  |  string  |  true  |  none  |  none  |  返回消息  |
|  data  |  object  |  true  |  none  |  none  |   |
|  data.token  |  string  |  true  |  none  |  none  |  返回token  |

#### 示例

#### 请求示例代码    
```java
@Test
void challengeResponseTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
}

//创建OpenApiClient对象
public OpenApiClient(String url, String handle, String privateKeyPem) {
    this();
    log.info("{} 开始挑战", handle);
    // 构建挑战应答API
    this.challengeResponseApi = Feign.builder()
        .encoder(encoder)
        .decoder(responseEntityDecoder)
        .contract(contract)
        .retryer(Retryer.NEVER_RETRY)
        .target(ChallengeResponseApi.class, url);
    // 认证
    String token = authenticate(handle, privateKeyPem);

}

/**
 * 鉴权获取token
 * @return
 */
private String authenticate(String handle, String privateKeyPem) {
    try {
        // 挑战
        DoipReturn < String > challengeResponse = challengeResponseApi.challenge(handle);
        String random = challengeResponse.getData();
        // 签名
        PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privateKeyPem);
        String sign = EncryptionUtils.sign(random.getBytes(StandardCharsets.UTF_8), privateKey);
        // 应答
        VerifyResponseDTO verifyResponseDTO = new VerifyResponseDTO();
        verifyResponseDTO.setHandle(handle);
        verifyResponseDTO.setSignature(sign);
        DoipReturn < Map < String, Object >> verifyResponse = challengeResponseApi.verifyResponse(verifyResponseDTO);
        if (!Objects.equals(verifyResponse.getCode(), DoipClientCodeEnum.SUCCESS.getCode())) {
            throw new RuntimeException("挑战失败");
        }
        log.info("{} 挑战应答成功！", handle);
        return verifyResponse.getData().get("token").toString();
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4L0FwcF96ajAxIiwiZXhwIjoxNzAyNTQyMTM0LCJpYXQiOjE3MDI0NTU3MzQsImp0aSI6IjMxMzlmNDVkLTA5YzAtNDljZS04MTdkLWE4NDRhZmFlZTFjMyJ9.9Akw3pAwMM-tHZ6WOB6OI4E_ZMvDKyRn6CPYD1TWahc"
    }
}
```