
import './index.css'


 export default  function App() {
return(
<>

    <form className='new-item-form'>
    <div  className='form-row'>
      <label htmlFor="item">New item</label>
      <input type="text" id='item' />
    </div>
    <button className='btn'>Add</button>
    </form>
    <h1 className='header'> Todo List</h1>
    <ul className='list'>

      <li>
        <label >
          <input type="checkbox" />
          item1
        </label>
        <button className='btn btn-danger'>delete</button>
      </li>
    </ul>



 </>
  
)



   
}

 
 
