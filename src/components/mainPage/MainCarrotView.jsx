import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Box, Modal } from '@mui/material';
import Swal from 'sweetalert2'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';


import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import Anhae from '../../image/anhae.jpg'
import { useSelector } from 'react-redux';
import connectChat from './connectChat';
import axios from 'axios';
import {url} from '../../utils/single';

const MainCarrotView = () => {
    const [modal, setModal] = useState({});
    const [like, setLike] = useState({});
    const token = useSelector((state) => state).MemberSlice.token;


    const [carrots, setCarrots] = useState([]);

    const openModal = (articleId) => {
        setModal((prevState) => ({
            ...prevState,
            [articleId]: true
        }));
    }

    const closeModal = (articleId) => {
        setModal((prevState) => ({
            ...prevState,
            [articleId]: false
        }));
    }


    const alarm = () => {
        console.log("alarm")
        Swal.fire({
            title: '로그인이 필요합니다.',
            text: '로그인 해주세요^^',
            icon: 'warning'
        });
    }

    const ToggleLike = (articleId) => {
        if (token === '') {
            alarm();
        } else {
            setLike((prevState) => ({
                ...prevState,
                [articleId]: !prevState[articleId]
            }));
        }
    };

    const requestChat = (e) =>() => {
        alert("글쓴이 아이디 : " + e)
        console.log("click")
        if (token === '') {
            console.log("token is on")
            alarm();
        } else {
            connectChat(e);
        }
    }

    const fetchData = async () => {
        try {
            const result = await axios.get(`${url}/carrot/recent`)
            .then(res => res.data 
            )
            .catch(err => {
                console.error(err);
                return err.response.data;
            });
            console.log("List result :: ",result);
            setCarrots(result);
        } catch (e) {
            console.error(e);
        }
    
    };

    useEffect(() => {
        fetchData();
    }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            {carrots && carrots.map((carrot) => (
                <div key={carrot.carrotId} className={BoardViewStyle.postsList}>
                    <div className={BoardViewStyle.post}>
                        <div className={BoardViewStyle.postHeader}>
                            <img src={Anhae} alt="User" className={BoardViewStyle.postUserImage} onClick={() => openModal(carrot.articleId)} />
                            <div>
                                {/* <p className={BoardViewStyle.postUserName}>{carrot.memberNickname}님</p> */}
                                <p className={BoardViewStyle.postContent}>{carrot.carrotTitle}</p>
                                <p className={BoardViewStyle.postTime}>                             <span className='Item-icon'>
                                <FavoriteBorderIcon sx={{fontSize:'16pt'}}/>
                            </span> {carrot.carrotLike}                                 <span className='Item-icon'>
                                <ChatBubbleOutlineIcon sx={{fontSize:'16pt'}} /> </span> {carrot.carrotView}</p>
                            </div>
                        </div>


                        {/* <Modal
                            open={modal[carrot.carrotId]}
                            onClose={() => closeModal(carrot.carrotId)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <Box sx={style}>
                                <p className={BoardViewStyle.postUserName}>{article.memberNickname}</p>/
                                <img src={Anhae} alt="User" />
                                <div className={BoardViewStyle.ModalCopontainer}>
                                    <button>팔로우</button>
                                    <button onClick={requestChat(article.memberId)}>
                                        <span style={{ color: '#ffffff' }}>1:1 대화</span>
                                    </button>
                                </div>
                            </Box>
                        </Modal> */}


                    </div>
                </div>
            ))}
            <div className={BoardViewStyle.postHeader}>
            <Link to={{ pathname: '/recent', search: '?sort=articleId' }} className={BoardViewStyle.moreplz}>
                    <button className={BoardViewStyle.moreplz}>더보기</button>
            </Link>
            </div>
        </>
    );
};

export default MainCarrotView;