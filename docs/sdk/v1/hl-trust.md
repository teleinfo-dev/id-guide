# 可信解析

## HS_CERT

证书以标识用户身份为基础的，与用户身份为同一个标识，也是一个特殊的标识值。他的索引通常为 400，类型为"HS_CERT",数据是一个 JWT。如下图所示，标识证书：1，注册 type 为 HS_CERT 的标识值来保存证书，证书标识值与身份标识值在同一个标识中。2，证书的格式为 JWT，以字符串形式保存在标识值当中。3，JWT 声明中的签发人、主体等信息使用标识身份来管理，JWT 的签名使用签发人的密钥采用 RS256 算法计算。

![图 1](./images/hl-trust_cert_558961ed8de354904c8093e5839668ba0a61fc32e919c83a606b0f73497dc771.png)

证书中的负载是一个 JSON 类型的数据，包含了证书的声明。证书中的声明约定为以下无素，并预留扩展字段以方便添加自定义属性。
•perms：权限
•publicKey：用户公钥
•iss (issuer)：签发人
•exp (expiration time)：过期时间
•sub (subject)：主体
•nbf (Not Before)：生效时间
•iat (Issued At)：签发时间
•org（ organization ）：组织
•sn（Subject Name）：主体名称
•exts（ Extensions ）:扩展
如下图所示，标识用户 301：88.111.1/test 的证书声名信息，它具有所有权限，是标识用户 301：88.111.1/0.0 颁发的，组织为北京泰尔英福科技有限公司，主体名称为泰尔英福。证书合法性可以通过验证生效时间，过期时间，证书的签名信息进行验证。

![图 2](./images/hl-trust_payload_7b18c592e8556154809572840e8990866daeb28bc7ce44987fb621caffdb78ab.png)

## 证书链

在工业互联网标识解析体系中，一切皆标识，信认仓库也是一个约定的标识，如约定为 88.111.1/0.0，在这个约定标识内的标识用户与根证书对整个体系可信。如下图所示，根证书与可信：
•根证书是自签名的（self-signed）：颁发者和主体相同。
•根证书的标识与初始化证书是通过标识客户端或者 sdk 分发的，客户端的版本发布也应该通过证书验证。
•根证书签发中间证书，中间证书签发普通证书，形成一个证书链。通过标识解析与证书的引用关系可以构建证书链。
为了防止定书过长，证书链的长度可以设置限制为 N，N 的取值为 1,2,3，...。

![图 3](./images/hl-trust_cert_chain_24a1d74bbfcfe80aec4d06336165757fdab7fa19a796207df26da858d9433f3f.png)

## 证书权限

证书颁发机构为根证书或者受信证书颁发的证书，这个证书具有颁发其它证书的权限。证书声明中 perms 是一个数组，可以包含多条数据，一条数据中的 perm,可以有 4 个级别
1、everything 所有权限
2、derivedPrefixes 派生前缀
3、handlesUnderThisPrefix 前缀下的标识
4、thisHandle 指定标识
除 perm 为 everything 不需要指定 handle 字段外，其它情况都需要指定。ca 标志是否为证书颁发机构，如不指定默认为 true，示例如下图所示：

![图 4](./images/hl-trust_permission_777db9e47041e3125f3fcdc18fc4f97025a8cba6eaa8332009234003c6708ebf.png)

## 数据签名与认证

在标识解析体系中，标识数据指的是标识值的数据。基于证书的信认体系建立以后，使用证书来对标识数据进行签名。标识签名是一种特殊的标识值，索引通常从 400 开始，类型为 HS_SIGNATURE，数据为 JWT。JWT 使用 RS256 算法进行签名，签名密钥为标识用户的私钥。JWT 的负载除包含颁发者，当前主体以及时间等相关信息以外，还包括每个需要签名的标识值生成哈希值，生成如图所示 JSON。
先对每个索引的数据计算哈希值，再将这些索引与哈希值组合为一个对象，最后把多个索引的对象组成一个数据，外层记录使用的哈希算法，得到一个 JSON 格式的标识值的签名负载。采用这种结构，当标识值因为权限设置无法全部响应时，不影响其它标识值的签名验证。

![图 5](./images/hl-trust_signature_ff8622672c6f53d5db969b5aa236440dee8c6dab5a92090e22aedf7c874629de.png)

如下图所示，可信签名的验证过程：对于有签名数据的标识，客户端或者 SDK 解析到标识以后，可以对可信签名进行验证。签名验证主要验证以下内容：
1、标识值的哈希是否匹配；
2、是不是在有效期限内；
3、JWT 签名是否合法；
4、构建的证书链上的证书是不是合法，在有效期内，JWT 签名正确；
5、根证书标识是否符合约定。
如果以上条件都满足，就认为相应的标识值为可信的。

![图 6](./images/hl-trust_process_1e544048375255dc2d870f8a123ccc93d513f85acb9581505defa0f8dfbc64cf.png)

## 签名与验证

### 签名过程

标识的签名过程与标识的注册过程相同,除了需要原有的标识数据外,添加了一个类型为 HS_SIGNATURE 的标识值,通常 index 从 400 开始.

**前提条件**：拥有证书，有权限写入标识
**代码示例**

```java
String privKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpCFImZ398hp8+mjjSighZiaUN\n" +
            "PCEUg/nRAJFEJAtR6ccXZ/lVjQ1JKfGZtRBeRDum88yEftoFUvoGmyh82TB2xqmnlnCHBc3HuPpS\n" +
            "dBEY9m+kIrcPFyevqttyheNsJKTEM8N3H+rA1JYhD/eFMk/0DcRn2vgIgSgm3Lm3IZYcw9ghqqsu\n" +
            "29ltpitFuaWk4YHsAhZEssgjxtEU1xJnao4aEdDQebxrE8qVW9YEjNWK6ce7tnoon4R/xFVgQm+C\n" +
            "Y8cfz1vCMzrhDTxw3rZpfPHXfZHJlopJprxshjJ1P5WolsdPrLWOrZMQteAwaef7D1pQwmADN37o\n" +
            "NnchJEPScvdTAgMBAAECggEAJNK4Or+PSUx2gofMWylQ2lifCTwRJMv/byWFf+euQ6D/Cz1OVvHM\n" +
            "dCTcChUkxLRunlc8NZ0A1+oUp73DWzdhVG7A5M5kIzYDdz/34GCCnQKKnaImaPYtYhqBhfhe698r\n" +
            "ucZhDaF5XZqyPe+hh3XHby5UnB9aq1efrJ+nIZsCfa9dWeZnsFIf1THyuPn6H+yfv1GH3BWtvnpN\n" +
            "92uOBSgnrpVnJJ7WZDHmytjIj/CQhb5pKyXImaOOtOAvQHc8ny+J1jTQLdWinUGm1Zsrzc9IN1zA\n" +
            "jiOXW+J/JBVpRpMWtAkeCeT2aU53RF83gqFC4riLaaVxYEcyKWVs5JQ3IyLq8QKBgQDmXtX4Ziq5\n" +
            "9IIzPgi8nbRlZ7HUawyX3YulBNf6G11r1wYlmROx9HxCbgGT36+mGM7lD6hRborArhGQ6UCX7puf\n" +
            "6X0cavcgZMmuLqUVuRwF+HMA1EONvpoNgHR2+E9RsmCI+kTqy8BktQkhwKUdL5/yh4KdQLlZneUU\n" +
            "OzXAchkXawKBgQC71oX9Kpkg631yGu+z3VR1L7XZyTJkxfhjq9fDtD6uDmGCVVyOISnm/rXzKcZZ\n" +
            "2Mv0fEUs/KNPRzg5ocODOPoJYTNPRQ5fG+qLfiHcoegjWx+56h1dM0e6um0xD7uLJTZLw4BaGLXV\n" +
            "/1Jfw5T/OZzylgp4OdAZn+RKEFGIbTThuQKBgHuJ9gL8fwMz3TKvnK3RgLE0t4erVJiIRV/cRhoo\n" +
            "3KN9Lx2whoBTFOPm7E+pkB9phGIQUHpC5oPHlUH55BrV6X0LEH3R2u7zPbh76SnKF/4Xq0yRiByW\n" +
            "TzTYYxx9ssOj/eLXG2gyld0rvFbuYV1Scdr00pWT5RHq+7MqwXuPdGc7AoGAI93oo9jYeIK+52Th\n" +
            "VHT0xZOgo79ZUgjDTzTm9EWcmlvAnsRx8em/OI52a8IUT9+nwj1gcCClhmPRBqAu1wWwKM5Yn9BN\n" +
            "2DdaZ9xj1t9LlkS2ICfmB3/dOHiUlQOuCfnHDlx8S7fgMMaaEhMkhj+YCnI/+YkAhYQUcVgAWY6Q\n" +
            "xHECgYEAx2yxqhNRrZIqRQvLDWfHu/tvlaDcISBX/HuWE//sqlUG05fFY7DI3r1Va/S5DKf6mueA\n" +
            "ojq/oxjQrsFl3gfOwv9ttjYqfd7vSpojyNbZDdHYtzOkdyrOvpsWlYYn+4ef/qdCHpthsyx4Tv8H\n" +
            "lg/0xZ8oZVr5aJlFPR7uJAQrHdA=\n" +
            "-----END PRIVATE KEY-----";
void signatureInitTest() throws Exception {

        PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privKeyPem);

        String adminUserHdl = "88.111.1/admin";
        AuthenticationInfo authenticationInfo = new PublicKeyAuthenticationInfo(Util.encodeString(adminUserHdl), 300, privateKey);
        ValueHelper valueHelper = ValueHelper.getInstance();
        IDClient idClient = GlobalIdClientFactory.newInstance("88.802.1", authenticationInfo);


        String handle = "88.802.1/test";
        List<HandleValue> valueList = new ArrayList<>();

        HandleValue handleValue = new HandleValue(1, "URL", "www.test.cn");
        valueList.add(handleValue);
        handleValue = new HandleValue(2, "EMAIL", "test@teleinfo.cn");
        valueList.add(handleValue);

        HandleSigner handleSigner = HandleSigner.getInstance();
        PrivateKey entPrivateKey = KeyConverter.fromPkcs8Pem(entPrivKeyPem);

        LocalDateTime notBefore = LocalDateTime.now().minusYears(1);
        LocalDateTime expr = LocalDateTime.now().plusYears(1);

        JsonWebSignature jsonWebSignature = handleSigner.signHandleValues(handle, valueList, new ValueReference("88.802.1/88.802.1", 301), entPrivateKey, null, notBefore.toEpochSecond(ValueHelper.zoneOffsetBj), expr.toEpochSecond(ValueHelper.zoneOffsetBj));

        String data = jsonWebSignature.serialize();

        HandleValue sigValue = new HandleValue(400, Common.STR_HS_SIGNATURE_TYPE, data);
        valueList.add(sigValue);

        idClient.createHandle(handle, valueHelper.listToArray(valueList));
        idClient.resolveHandle(handle);
    }
```

### 验证签名过程

```java
void verifyTest() throws IDException {
        IDResolver idResolver = GlobalIdClientFactory.getIdResolver();
        String handle = "88.802.1/test";
        HandleValue[] handleValues = idResolver.resolveHandle(handle);
        HandleValue signatureValue = null;
        for (int i = 0; i < handleValues.length; i++) {
            if (handleValues[i].getIndex() == 400) {
                signatureValue = handleValues[i];
            }
        }
        TrustResolveManager trustResolveManager = TrustResolveManager.getInstance();
        ChainVerificationReport report = trustResolveManager.validateSignatureValue(handle, handleValues, signatureValue);
        String reportJson = GsonUtility.getPrettyGson().toJson(report);
        System.out.println(reportJson);
    }
```
