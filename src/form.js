import React from 'react'

const Form = () => {
  return (
    <form action="#">
      <input className="todo-list" type="text" />
      <button type="submit" className="todo-button">
        {/* <i classname="fas fa-plus-square"></i> */}
        <i class="fa fa-plus-square"></i>

      </button>
      <select name="todos" className="filter-todo" id="select">
        <option value="all"> All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  )
}

export default Form