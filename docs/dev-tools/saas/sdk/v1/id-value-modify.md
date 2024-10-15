# 标识值修改

- **方法功能**：修改标识属性内容
- **方法描述**
  - overwrite=true 覆盖式更新，无论标识是否存在，原有标识属性全部替代为传入标识属性
  - overwrite=false 当标识属性不存在，不会进行更新，返回错误信息

```java
/**
 * Updates the specified data handle values.
 * <li>Make sure that the index value is specified in the array of handle
 * values or else this method will not work well.</li>
 * <li>The administrative priveleges have to be valid for this method to
 * perform without any exception</li>
 *
 * @param handle
 * @param values
 *
 * overwrite default value is false
 */
void updateHandleValues(String handle, HandleValue[] values) throws IDException;
```

```java
/**
 * you could set the value of overwrite by yourself; true or false
 */
updateHandleValues(String handle, HandleValue[] values, boolean overwrite) throws IDException;
```

- **方法参数**

| 参数      | 类型          | 参数描述           | 示例              |
| --------- | ------------- | ------------------ | ----------------- |
| handle    | String        | 标识名称           | 88.888.3/20220121 |
| values    | HandleValue[] | 标识属性值         |                   |
| overwrite | boolean       | 可根据使用方式选择 | true / false      |
