const taskList = document.getElementById('taskList')

function fetchTasks() {
    const xhr = new XMLHttpRequest
    xhr.open( 'GET', 'https://jsonplaceholder.typicode.com/todos')

    xhr.onload = () => {
        if(xhr.status === 200){
            const tasks = JSON.parse(xhr.responseText)
            tasks.forEach(task => {
                const li = document.createElement('li')
                li.textContent = task.title
                taskList.appendChild(li)
            })
        } else {
            console.log('Failed to fetch tasks')
        }
    }

    xhr.send()
}

fetchTasks()