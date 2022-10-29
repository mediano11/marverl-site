import './singleComicPage.scss';
import { Link } from 'react-router-dom';
import xMen from '../../resources/img/x-men.png';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton"
import ErrorMessage from "../errorMessage/ErrorMessage";

const SingleComic = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const {loading, error, getComics, clearError} = useMarvelService();

  useEffect(() => {
        updatecomic()
    }, [comicId])
    
  const updatecomic = () => {
    clearError();
    getComics(comicId)
      .then(oncomicLoaded)
  }

  const oncomicLoaded = (comic) => {
    setComic(comic);
  };

  const skeleton = comic || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;
    return (
        <>
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </>
        
      
    )
}

const View = ({comic})=> {
    const { id, title, description, pageCount,thumbnail, language, price } = comic;
    return (
    <div className="single-comic">
        <img src={thumbnail} alt={title} className="single-comic__img"/>
        <div className="single-comic__info">
            <h2 className="single-comic__name">{title}</h2>
            <p className="single-comic__descr">{description}</p>
            <p className="single-comic__descr">{pageCount}</p>
            <p className="single-comic__descr">Language: {language}</p>
            <div className="single-comic__price">{price}</div>
        </div>
        <Link to="/comics" className="single-comic__back">Back to all</Link>
    </div>
    );
  }
export default SingleComic;