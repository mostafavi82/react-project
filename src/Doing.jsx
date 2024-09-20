export default function Doing({title, status, deleteBtn, check}) {
    return (
        <div>
            <div>
                <input type="checkbox"   onClick={() =>check(title)}  className="" />
                <p className= {`inline-block mt-1 ml-2 text-gray-600 ${status? 'line-through': ''}`} >{title}</p>
            </div>
            <button type="button" onClick={()=> deleteBtn(title)} className="absolute right-0 flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}