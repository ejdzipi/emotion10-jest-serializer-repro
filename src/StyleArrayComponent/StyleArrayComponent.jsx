import React from 'react'
import {css} from '@emotion/core'

const noArrayStyle = css`
    display: flex;
`

const style1 = css`
    background-color: black;
`

const style2 = css`
    color: white;
`

export default () => {
    return (
        <div css={noArrayStyle}>
            Test content
            <div css={[style1, style2]}/>
        </div>
    );
};
