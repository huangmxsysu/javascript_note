
### **json正确语法**
键值对都使用**双引号**
```js
{
  "string":"string",
  "number":24,
  "boolean": true,
  "null": null,
  "object": {
    "a": "b",
    "c": "d",
    "e": "f"
  },
  "array": [1,2,3]
}
```

### **json语法验证**
在线工具，帮助格式化与验证json
* [JSON Formatter](https://jsonformatter.curiousconcept.com/) 
* [JSON Editor Online](http://jsoneditoronline.org/)


### **json的媒体类型**
MIME类型为`application/json`

### **json数据格式**
  **注意点：转义**
  * 内部双引号`{ "name":"I am \"mosen\" }"`
  * 反斜线：`{ "location":"C:\\Program Files"}`
  * 正斜线：`\/`
  * 退格键：`\b`
  * 换页符：`\f`
  * 制表符：`\t`
  * 换行符：`\n`
  * 回车符：`\r`
  * 十六进制符：`\u`

