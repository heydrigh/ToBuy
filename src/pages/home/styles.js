import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3e3e3e;
  line-height: 56px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;
export const TitleCreate = styled.h1`
  font-size: 48px;
  color: #3e3e3e;
  margin-right: 17px;
  line-height: 56px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const CreatePreviewContainer = styled.button`
  width: 600px;
  height: 130px;
  left: 486px;
  top: 201px;
  padding-left: 15px;
  display: flex;
  margin-top: 10px;
  margin-left: 130px;
  align-items: center;
  align-content: center;
  background: #222228;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const FormCreateTitle = styled.form`
  padding-left: 10px;
  width: 319px;
  height: 46px;
  left: 515px;
  top: 255px;

  background: #C4C4C4;
  border-radius: 8px;

  input {
    background: #C4C4C4;
    flex: 1;
    border-radius: 8px;
    width: 350px;
    height: 46px;
    left: 515px;
    top: 255px;
    padding: 0 24px;
    border: 0;
    color: #3a3a3a;
  }
`;

export const FormCreatePrice = styled.form`
  padding-left: 10px;
  width: 155px;
  height: 46px;
  left: 515px;
  top: 255px;
  margin-left: 80px;

  background: #C4C4C4;
  border-radius: 8px;

  input {
    background: #C4C4C4;
    flex: 1;
    border-radius: 8px;
    width: 155px;
    height: 46px;
    left: 515px;
    top: 255px;
    padding: 0 24px;
    border: 0;
    color: #3a3a3a;
  }
`;

export const CardShow = styled.div`
  margin-top: 100px;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
`;


export const ModalCustom = styled.div`
  width: 1800px;
`;

export const FormCreate = styled.form`
  margin-top: 10px;
  border-radius: 8px;
    input {
  display:flex;
  flex-direction: row;
  width:600px;
  margin-bottom: 10px;
  color: #000
  }
  input + input {
    margin-top: 10px;
  }
  
  .description{
    height: 150px;
  }
`;

export const Input = styled.input`
  display:flex;
  flex-direction: row;
  width:600px;
`;

