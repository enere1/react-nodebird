import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, List, Comment, Popover } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import PostImages from './PostImages'
import { Content } from 'antd/lib/layout/layout';
import CommentForm from './CommentForm';
const PostCard = ({ post }) => {

    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [liked,setLiked] = useState(false)
    
    const onToggleLike = useCallback(() => {
        setLiked((prev)=>!prev)
    },[])

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev)=>!prev)
    },[])

    const id = useSelector((state) => state.user.me?.id);
    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart"  onClick={onToggleLike}/>,
                    <MessageOutlined key="message" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                        { id && post.User.id === id 
                            ?(
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger">삭제</Button>
                                </>
                            ) : <Button>신고</Button>
                        }
                        </Button.Group>)}>       
                        <EllipsisOutlined />
                    </Popover>
                ]}>
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                />
                <Content />
            </Card>
            {commentFormOpened && (
            <>
                <CommentForm post={post}/>
                <List
                    header= {`${post.Comments.length}개의 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments}
                    //jsx를 리턴할때 ()여기다가 넣야함
                    renderItem={(item)=>(
                        <li>
                            <Comment
                                author = {item.User.nickname}
                                avatar = {<Avatar>{item.User.nickname[0]}</Avatar>}
                                content = {item.content}
                            />
                        </li>
                    )}
                />
            </>
            )}
        </div>
    )
}

PostCard.prototype = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        Content: PropTypes.string,
        Images: PropTypes.arrayOf(PropTypes.object),
        Comments: PropTypes.arrayOf(PropTypes.object),
    }).isRequired
}
export default PostCard