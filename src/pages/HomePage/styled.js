import styled from "styled-components";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: flex-start;
    border-bottom: 1px solid red;
    font-size: 20px;
    height: 44px;

`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: rgb(13, 92, 182);
        span {
            color: #fff
        }
    }
    width: 100%,
    text-algin: center;

 `
export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
 
 `