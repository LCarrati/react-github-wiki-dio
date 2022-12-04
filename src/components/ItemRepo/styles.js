import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }
    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }
    a {
        text-decoration: none;
        color: #FAFAFA;
    }
    & a:hover {
        color: limegreen;
    }
    a.remover {
        color: #FF000080;
        margin-top:20px;
    }
    & a.remover:hover {
        color:#FF0000;
    }
    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`