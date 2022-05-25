import styled, { css } from "styled-components";

const Text = styled.p`
    font-size: ${(props) =>
    props.theme.size[props.variant] || props.theme.colors["primary"]};
`;

export default Text;