
### 上传文件

#### 说明

方法名：
```java
DoipReturn upload(
    @RequestParam(value = "handleName", required = false) String handleName,
    @RequestParam(value = "metaHandle") String metaHandle,
    @RequestParam(value = "fileField") String fileField,
    @RequestParam(value = "file") MultipartFile file
);    
```
方法说明：此方法可上传文件

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  handleName  |  String  |  否  |  \-  |  标识  |  88.608.6688/Meta\_1  |
|  metaHandle  |  String  |  是  |  \-  |  元数据  |  88.608.6688/Meta\_1  |
|  fileField  |  String  |  是  |  \-  |  文件属性  |  88.608.6688/Meta  |
|  file  |  MultipartFile  |  是  |  \-  |  上传的文件  |   |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |
|  data  |  Object  |  \-  |  返回数据  |   |
|  data.id  |  String  |  \-  |  文件id  |  664da3c5802cf826c367b8c4  |
|  data.filePath  |  String  |  \-  |  文件路径  |  173b5de7-1454-4489-b921-dd6f2fd6d938.md  |

#### 示例

#### 请求示例代码    
```java
/**
 * 上传文件
 */
@Test
void uploadApiTest() throws IOException {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    File file = new File("/Users/dzh/Downloads/chrome/8fb85f17756d46.png");
    FileInputStream fileInputStream = new FileInputStream(file);

    MultipartFile multipartFile = new MockMultipartFile(file.getName(), file.getName(), "application/octet-stream", fileInputStream);
    System.out.println(multipartFile.getName());

    DoipReturn doipReturn = openApiClient.getFileApi().upload(null, "88.608.5288/META_07_01", "file", multipartFile);

    log.info("上传文件返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}    
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "id": "664da3c5802cf826c367b8c4",
        "filePath": "173b5de7-1454-4489-b921-dd6f2fd6d938.md"
    }
}
```
### 文件下载

#### 说明

方法名：
```java
Response download(@RequestParam(value = "filePath") String filePath);
```
方法说明：此方法可下载文件

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  filePath  |  String  |  是  |  \-  |  文件路径  |  173b5de7-1454-4489-b921-dd6f2fd6d938.md  |

#### 返回参数

该接口下载的文件以流的形式返回，需要通过代码处理流来接收

#### 示例

#### 请求示例代码    
```java
/**
 * 下载文件
 */
@Test
void downloadApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    Response download = openApiClient.getFileApi().download("S3_f99d537d-ed6e-439b-ad2a-0b2824bf53c6.p1");

    log.info("下载文件返回结果：{}", download);
}
```