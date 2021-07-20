# Weather-App
https://arlenwh-code.github.io/Weather-App/
<br>
A weather application that allows the user to get the weather for the location of their choosing.
<br>
![image](https://user-images.githubusercontent.com/82676357/126334148-a00da92d-0b51-41c1-a647-e8e2c4c6122c.png)
<br>
When the user inputs the name of a city into the search field and clicks search.
<br>
![image](https://user-images.githubusercontent.com/82676357/126334567-0d694d00-9c0a-42ac-8d3e-3c2f7f50021e.png)
<br>
![image](https://user-images.githubusercontent.com/82676357/126334513-8abd1d13-1f00-4edd-ad9d-4baf83bccc86.png)
<br>
The name of the city entered into the input field is stored into local storage.
![image](https://user-images.githubusercontent.com/82676357/126334953-da9e3809-02b4-46fd-9df5-b264e8190e0c.png)
<br>
The value of the key value is then used to rename one of the buttons in the search history inorder to store the users search history.
The user is allowed to store up to 8 search results before having to refreash the page.
<br>
![image](https://user-images.githubusercontent.com/82676357/126335412-ec3a9919-ca8a-4a21-a5fc-71eb5fe5da6c.png)
<br>
The user is then presented with the current weather conditions for the city they searched for.
<br>
Including the current date, temperature, wind, humidity, and UV Index conditions.
<br>
![image](https://user-images.githubusercontent.com/82676357/126335652-55b49700-9d2a-4600-9f66-59e96576e201.png)
<br>
![image](https://user-images.githubusercontent.com/82676357/126335947-01954e40-01f2-4735-8b78-274fdf315ea3.png)
<br>
User is also presented with an image representation of the current weather conditions.
<br>
![image](https://user-images.githubusercontent.com/82676357/126336081-2da61b70-e097-4be9-816f-82717ed8323c.png)
<br>
User is also presented with a color representation for the conditions of the UV index: Green for favorable, Orange for moderate, or Red for severe.
<br>
![image](https://user-images.githubusercontent.com/82676357/126336630-4a716f54-ba86-443c-a2b8-14cbde43aa54.png)
<br>
User is then presented with the 5-day forecast of that current city including the date, image representation, temperature, wind, and humidity for that specific forecast.
<br>
![image](https://user-images.githubusercontent.com/82676357/126337181-bdc4f173-6a08-4346-8006-c5e4df2570b3.png)
<br>
When the user clicks on one of the cities that was stored as a button. The value of the button is then put into the variable that gives the api querystring the value of the 
city your searching for.
![image](https://user-images.githubusercontent.com/82676357/126337905-6ed58963-584d-454b-9db4-8d456e077db7.png)
<br>
The api then searches for that same city again and presents the user with the results for that city once again.
![image](https://user-images.githubusercontent.com/82676357/126338461-a1fda1dd-f44c-4e83-b156-1f64f44f1f74.png)
