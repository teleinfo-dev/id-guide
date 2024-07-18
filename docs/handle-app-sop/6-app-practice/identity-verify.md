# 身份认证

使用已配置好的企业节点地址和应用身份信息进行身份认证， 身份认证成功后获取apiClient，使用apiClient调用其他功能接口

```java
/**
 * 身份认证
 *
 * @url 企业节点地址
 * @handleUser 应用标识身份
 * @privateKeyPem 应用身份私钥
 */
  OpenApiClient apiClient = new OpenApiClient(url, handleUser, privateKeyPem);
```