import AddMovie from "./AddMovie"
import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"

const ListMovies=({movies,setMovies,titre,etoile,setTitre,setEtoile})=>{
    const x =  movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile).map(el=> <CardMovie el={el} movies={movies} setMovies={setMovies}/>)
    return(
        <div>
        <FilterMovie setTitre={setTitre} setEtoile={setEtoile} titre={titre} etoile={etoile}/>
        <AddMovie movies={movies} setMovies={setMovies}/>
       <div className="bou">
            {              
                 
                 x.length == 0 ? <img src="/hh.jpg" style={{height:'500px'}}/> : x          
             
            }
        </div>
        </div>
    )
}

export default ListMovies