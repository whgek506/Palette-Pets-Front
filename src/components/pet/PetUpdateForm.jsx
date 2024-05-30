import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {Button, FormHelperText, InputAdornment} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import LoginImgComp from "../loginPage/LoginImgComp.jsx";

const PetRegisterForm = ({ closeModal, pet }) => {

    const [petName, setPetName] = useState(pet.petName);
    const [petImage, setPetImage] = useState(pet.petImage);
    const [petCategory1, setPetCategory1] = useState(pet.petCategory1);
    const [petCategory2, setPetCategory2] = useState(pet.petCategory2);
    const [petGender, setPetGender] = useState(pet.petGender);
    const [petBirth, setPetBirth] = useState();

    console.log(pet)

    const registerPet = () => {
        alert("수정 완료");
    };

    const handleChangePetCategory1 = (e) => {
        setPetCategory1(e.target.value);
    }
    const handleChangePetCategory2 = (e) => {
        setPetCategory2(e.target.value);
    }
    const handleChangePetGender = (e) => {
        setPetGender(e.target.value);
    }

    return (
        <>
            <div className="pet">
                <h2>반려동물 정보 수정</h2>
            </div>
            <div className="register-form">
                <TextField id="outlined-basic" fullWidth={true} label="petName" variant="outlined"
                           value={petName} required/>
                <br/>
                <br/>
                <img src={petImage} width="100" height="100" alt="펫 이미지" />
                <TextField id="outlined-basic" fullWidth={true}
                           value={petImage}
                           onChange={(e) => {
                               setPetImage(e.target.value);
                           }}
                           label="petImage" variant="outlined"/>
                <br/>
                <br/>
                <FormControl fullWidth={true}>
                    <InputLabel id="petCategory1_label">대분류</InputLabel>
                    <Select
                        labelId="petCategory1_label"
                        id="demo-simple-select"
                        value={petCategory1}
                        label="petCategory1"
                        onChange={handleChangePetCategory1}
                    >
                        <MenuItem value={'dog'}>강아지</MenuItem>
                        <MenuItem value={'cat'}>고양이</MenuItem>
                    </Select>
                </FormControl>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {
                    petCategory1 === "dog" && (
                        <FormControl fullWidth={true}>
                            <InputLabel id="petCategory2_label">소분류</InputLabel>
                            <Select
                                labelId="petCategory2_label"
                                id="demo-simple-select"
                                value={petCategory2}
                                label="petCategory2"
                                onChange={handleChangePetCategory2}
                            >
                                <MenuItem value={''}>선택하세요</MenuItem>
                                <MenuItem value={'koka'}>코카니얼</MenuItem>
                                <MenuItem value={'jindo'}>진돗개</MenuItem>
                                <MenuItem value={'siba'}>시바견</MenuItem>
                            </Select>
                        </FormControl>
                    )
                }
                {
                    petCategory1 === "cat" && (
                        <FormControl fullWidth={true}>
                            <InputLabel id="petCategory2_label">소분류</InputLabel>
                            <Select
                                labelId="petCategory2_label"
                                id="demo-simple-select"
                                value={petCategory2}
                                label="petCategory2"
                                onChange={handleChangePetCategory2}
                            >
                                <MenuItem value={''}>선택하세요</MenuItem>
                                <MenuItem value={'koka'}>길냥이</MenuItem>
                                <MenuItem value={'jindo'}>침냥이</MenuItem>
                                <MenuItem value={'siba'}>ㅈ냥이</MenuItem>
                            </Select>
                        </FormControl>
                    )
                }
                <br/>
                <br/>
                <FormControl fullWidth={true}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="출생일"
                            value={petBirth}
                            onChange={(newValue) => setPetBirth(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FormControl fullWidth={true}>
                    <InputLabel id="petGender">성별</InputLabel>
                    <Select
                        labelId="petGender"
                        id="demo-simple-select"
                        value={petGender}
                        label="petGender"
                        onChange={handleChangePetGender}
                    >
                        <MenuItem value={'M'}>남아</MenuItem>
                        <MenuItem value={'F'}>여아</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <br/>
                <FormControl fullWidth={true} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                </FormControl>

                <Button variant="outlined" onClick={registerPet}>등록</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="outlined" onClick={closeModal}>취소</Button>

            </div>
        </>
    );
}

export default PetRegisterForm;