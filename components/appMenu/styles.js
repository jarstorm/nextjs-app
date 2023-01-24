import css from "styled-jsx/css"

export default css`
    div {
        display: grid;
        height: 100vh;
        place-items: center;
    }

    main {
        background: white;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        box-shadow: 0px 10px 25px 3px rgba(0, 0, 0, 0.2);

    }

    @media (min-width: ${breakpoints.mobile}) {
        main {
            height: 90vh;
            width: ${breakpoints.mobile};
        }
    }
`