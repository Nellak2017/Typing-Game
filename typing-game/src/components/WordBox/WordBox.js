import React from 'react';

export const WordBox = (words) => {

    console.log("words");
    console.log(words);

    console.log("Words keys");
    console.log(Object.keys(words.words));

    return (
        <div id="word-box">
            <div id="words" class="row">
                <div id="row1">
                    {Object.values(words.words).map((item, index) => {
                            return (
                                <span key={"word"+index} id={"word"+index} class={index === 0 ? "highlight" :""}>{item}</span>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default WordBox;