import React from 'react';

type SuperButtonType={
    disabled: boolean
    className: string
    onClick: ()=>void

    title: string

}

const SuperButton = (props:SuperButtonType) => {
    return (
        <>
            <button disabled={props.disabled}
                    className={props.className}
                    onClick={props.onClick}>{props.title}</button>
        </>
    );
};

export default SuperButton;