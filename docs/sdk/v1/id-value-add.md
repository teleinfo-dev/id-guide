# 标识值新增

- **方法功能**：增加标识值
- **方法描述**
  - overwrite=true 创建标识，覆盖式更新，无论标识是否存在，原有标识属性全部替代为传入标识属性
  - overwrite=false 创建标识，如果标识存在则返回错误信息

```java
/**
 * Adds new handle records. </br> <b> Note: </b>
 * <li>The administrative priveleges have to be valid for this method to
 * perform without any exception</li>
 *
 * @param handle The handle into which new values are to be added
 * @param values The array of handle values to deposit
 *
 * overwrite default value is false
 */
void addHandleValues(String handle, HandleValue[] values) throws IDException;
```

```java
/**
 * you could set the value of overwrite by yourself; true or false
 */
void addHandleValues(String handle, HandleValue[] values, boolean overwrite) throws IDException;
```

- **方法参数**

| 参数      | 类型          | 参数描述           | 示例              |
| --------- | ------------- | ------------------ | ----------------- |
| handle    | String        | 标识名称           | 88.888.3/20220121 |
| values    | HandleValue[] | 标识属性值         |                   |
| overwrite | boolean       | 可根据使用方式选择 | true / false      |
