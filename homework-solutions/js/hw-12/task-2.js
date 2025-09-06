async function createTodo(todoBody) {
  try {const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(todoBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status!==201){
        throw new Error(`Ошибка: статус ${response.status}`);
    }

    const data = await response.json();

    if(data.id !== 201){
        throw new Error("Айди не совпадает с 201");
    }

    return data;
}catch (error){
    console.error("Произошла ошибка:", error.message);

}finally{
    console.log("Работа функции завершена");
}
}

