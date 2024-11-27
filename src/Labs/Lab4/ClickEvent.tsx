const hello = () =>{
    alert("Hello world!");
};

const lifeIs = (good:string)=>{
    alert(`Life is ${good}`);
};

export default function ClickEvent(){
    return(
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <button onClick={hello} id="wd-hello-world-click">Hellow World!</button>
            <button onClick={() => lifeIs("Good!")} id="wd-life-is-good-click" >Life is good!</button>
            <button onClick={()=> {hello();lifeIs("Great!")}} id = "wd-life-is-great-click"> Life is Great!</button>
            <hr/>
        </div>
    )
}