
### 上传文件

#### 说明：通过此方法，用户可进行文件上传操作，该操作用于创建实例时，存在“文件型”、“图片型”、“视频型”、“音频型”元素，需进行上传，可进行单个/批量上传。

方法名：
```java
DoipReturn upload(
    @RequestParam(value = "handleName", required = false) String handleName,
    @RequestParam(value = "metaHandle") String metaHandle,
    @RequestParam(value = "fileField") String fileField,
    @RequestParam(value = "file") MultipartFile file
);    
```
#### 注意
- 单个文件上传，不能超过50M；上传文件数量取决于元数据模板中实体元素设定，最大设定不超过50个。
- 可上传格式如下：
  >     文件型：doc;docx;xps;dot（word）、xls;xlsx;xlsb;xlsm;csv（excel）、pdf、zip；rar（压缩包）
  >     音频型：wav;mp3;mp4
  >     视频型：avi;mov;wmv;flv;mp4
  >     图片型：jpg;jpe;png;jpeg;gif;tif;tiff;jxr;bmp

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  | **示例值**                |
| --- | --- | --- | --- | --- |------------------------|
|  handleName  |  String  |  否  |  \-  |  标识  | 88.608.6688/handle_1   |
|  metaHandle  |  String  |  是  |  \-  |  元数据  | 88.608.6688/Meta_test1 |
|  fileField  |  String  |  是  |  \-  |  文件属性  | file                   |
|  file  |  MultipartFile  |  是  |  \-  |  上传的文件  |                        |

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
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //读取文件
    File file = new File("/Users/dzh/Downloads/chrome/8fb85f17756d46.png");
    //将文件转换成流对象
    FileInputStream fileInputStream = new FileInputStream(file);

    MultipartFile multipartFile = new MockMultipartFile(file.getName(), file.getName(), "application/octet-stream", fileInputStream);
    System.out.println(multipartFile.getName());

    //调用上传文件方法
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

#### 说明：通过此接口，用户可进行文件上传操作，该操作用于查询或实例时，存在“文件型”、“图片型”、“视频型”、“音频型”元素信息，提供用户进行下载。

方法名：
```java
Response download(@RequestParam(value = "filePath") String filePath);
```
#### 注意
- 该接口下载的文件以流的形式返回，需要通过代码处理流来接收。

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  filePath  |  String  |  是  |  \-  |  文件路径  |  173b5de7-1454-4489-b921-dd6f2fd6d938.md  |

#### 返回参数

该接口下载的文件以流的形式返回

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
