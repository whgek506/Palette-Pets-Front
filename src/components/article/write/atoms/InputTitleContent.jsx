import { useState } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useArticleImageUpload } from '../context/ArticleImageUploadContext';

export default function InputTitleContent() {
    const articleImageUploadContext = useArticleImageUpload();
    const {title,content,inputContent,inputTitle} = articleImageUploadContext

    const [titleValid, setTitleValid] = useState(true);

    const titleCheck = () => {
        title.length < 2 ? setTitleValid(false) : setTitleValid(true)
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    {
                        titleValid ?

                            <TextField
                                id="outlined-basic"
                                label="제목"
                                variant="outlined"
                                value={title}
                                onChange={inputTitle}
                                onBlur={() => titleCheck()}
                            /> :
                            <TextField
                                error
                                id="outlined-error"
                                label="2글자 이상 작성해 주세요"
                                value={title}
                                onChange={inputTitle}
                                onBlur={() => titleCheck()}
                            />
                    }
                </div>
            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-multiline-static"
                    label="내용"
                    multiline
                    rows={10}
                    value={content}
                    onChange={inputContent}
                />
            </Box>

        </>
    );
}