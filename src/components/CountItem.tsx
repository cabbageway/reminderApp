interface ICount {
    id:number,
    value:number
}

interface CountProps {
    counters: ICount[];
}
 const CountItem = ({  id, value }: ICount, children:String ) => {
    return (
     <li>
      <div>
        {id}
        <button className="btn btn-warning">{value}    </button>
      </div>
     </li>
    )
   }

   export default CountItem;