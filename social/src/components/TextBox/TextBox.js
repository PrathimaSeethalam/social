/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import React from 'react';

export default function TextBox(props) {
    return (
        <div>
            <div class='form-group green-border-focus'>
                <label for='exampleFormControlTextarea5'>
                    {/* Colorful border on :focus state hiii */}
                </label>
                <button
                    type='submit'
                    className='btn btn-primary'
                    style={{ margin: '50px', height: '100px', width: '50%' }}
                    onClick={props.info}
                >
                    {props.textBoxName}
                </button>
            </div>
        </div>
    );
}
