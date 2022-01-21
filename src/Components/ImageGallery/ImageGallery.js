import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import s from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem'
import Loader from "react-loader-spinner";
import Button from '../Button';
import Modal from '../Modal';
import Init from "../../services";

import shortid from 'shortid';

export default function ImageGallery ({name}) {

  const [pictures, setPictures] = useState(null);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const [photo, setPhoto] = useState(null);

  // const services = useMemo(() => 
  //   Init(page, name, id ), [page, name, id]);
  const services = Init(page, name, id );
  
  useEffect(()=>{
    if(name){
      setLoader(true);
      services.fetchName()
      .then(({ hits }) => {
        console.log(hits.length === 0);
        hits.length === 0 ? alert('Enter correct request') :
        setPictures(hits)
      })
      .finally(() => setLoader(false))
    }}, [name])
  
  useEffect(()=>{
      if(pictures){
        services.fetchPage()
        .then(({ hits }) => setPictures([...pictures, ...hits]))
        .finally(() => setLoader(false))}
  }, [page])

  useEffect(()=>{
    if(id){
      services.fetchPic()
    .then(({hits}) => setPhoto(hits))
    .catch(console.log);
    }
  }, [id])
  useEffect(()=>{
    window.addEventListener('keydown', modalClose)
    return ()=> window.removeEventListener('keydown', modalClose)
  })
  const modalOpener = (e) => {
    setPhoto(null);
    setModalOpen(true);
    setId(e.target.name)
  }
  const modalClose = (e) => {
    if (e.target === e.currentTarget || modalOpen && e.code === 'Escape') {
      setModalOpen( false )
    };
  }
  const nextPage = () =>{

  setPage(page + 1)
  setLoader(true)
}

  return (
    <div className={s.center}>
      <ul className={s.ImageGallery}>
        {!name && <div className={s.text}>...Найдется все</div>}
        {loader && <div className={s.loader}>
          <Loader type="Bars"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={2000}
          />
        </div>}
        {pictures &&
          (pictures.map(image =>{
            const ID = shortid.generate()
          return  <ImageGalleryItem 
            image={image}
            key={ID} 
            modal={modalOpener} />}
          ))}
        {modalOpen && photo && <Modal photo={photo} modal={modalClose} />}
      </ul>
      {pictures && <Button onClick={nextPage} />}
    </div>
  )
}
// export default class ImageGallery extends Component {
  
  // state = {
  //   pictures: null,
  //   page: 1,
  //   loader: false,
  //   modalOpen: false,
  //   id: null,
  //   photo:null
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextName = this.props.name;
  //   const { page,id } = this.state;
  //   const services = new Services(page, nextName, id);
  //   if (prevProps.name !== nextName) {
  //     this.setState({ loader: true })
  //     services.fetch().then(res =>
  //       res.json())
  //     .then(({ hits }) =>
  //       this.setState({ pictures: hits }))
  //     .finally(() =>
  //       this.setState({ loader: false }))
        
  //   } else if (prevState.page !== page) {
  //     services.fetch()
  //       .then(res =>
  //         res.json())
  //       .then(({ hits }) =>
  //         this.setState(prevState =>
  //           ({ pictures: [...prevState.pictures, ...hits] })))
  //       .finally(() =>
  //         this.setState({ loader: false }))
      
  //   } else if (prevState.id !== id) {
  //     this.setState({photo: null})
  //     services.fetchPic().then(res => res.json())
  //       .then(({hits}) =>
  //        this.setState({photo: hits}))
  //   }
  // }
  // componentDidMount() {
  //     window.addEventListener('keydown', this.modalClose)
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.modalClose)
  // }
  // modalOpener = (e) => {
  //   const id = e.target.name;
  //   this.setState(
  //     ({
  //       modalOpen: true,
  //       id
  //     })
  //   )
  // }
  // modalClose = (e) => {
  //   if (e.target === e.currentTarget || this.state.modalOpen && e.code === 'Escape') {
  //     this.setState({ modalOpen: false })
  //   };
  // }
  
  // nextPage = () =>
  //   this.setState(prevState =>
  //   ({
  //     page: prevState.page + 1,
  //     loader:true
  //   }));
//   render() {
//     const { modalOpen, photo, pictures,loader } = this.state;
//     return (
//       <div className={s.center}>
//         <ul className={s.ImageGallery}>
//           {!this.props.name && <div className={s.text}>...Найдется все</div>}
//           {loader && <div className={s.loader}>
//             <Loader type="Bars"
//               color="#00BFFF"
//               height={200}
//               width={200}
//               timeout={2000}
//             />
//           </div>}
//           {pictures &&
//             (pictures.map(image =>
//               <ImageGalleryItem image={image} key={image.id} modal={this.modalOpener} />
//             ))}
//           {modalOpen && photo && <Modal photo={photo} modal={this.modalClose} />}
//         </ul>
//         {pictures && <Button onClick={this.nextPage} />}
//       </div>
//     )
//   }
// }
PropTypes.ImageGallery = {
  name: PropTypes.string.isRequired,
}