# 接口调用

使用上一步认证成功后获取的apiClient调用标识解析接口，解析标识，获取数据

```java
/**
 * GET请求-标识数据解析
 * 
 * @param targetId 要解析的标识
 * @param operationId 操作类型，枚举类
 */
DoipReturn get(@RequestParam(value = "targetId") String targetId, @RequestParam(value = "operationId") String operationId)
```

java代码调用示例

```java
/**
 * 解析标识数据
 * 
 * @param handle
 * @return
 */
public Object resolve(String handle) {
    // 身份认证
    OpenApiClient apiClient = new OpenApiClient(url, handleUser, privateKeyPem);
    // 示例，解析标识 88.608.24061301/test
    String handleName = "88.608.24061301/test";
    DoipReturn doipReturn = apiClient.getIntanceApi().get(handleName, DoipOp.RETRIEVE.getName());
    // 获取数据
    Object data = doipReturn.getData();
    // 打印
    System.out.println(data);
    
    return data;
}
```