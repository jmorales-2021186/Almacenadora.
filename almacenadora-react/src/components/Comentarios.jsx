import React from 'react'

export const Comentarios = ({ src, name }) => {
    return (
        <>
            <div className='media'>
                <figure >
                    <img className='img' src={src} alt={name} />

                </figure>
                <div>
                    <h2 className='azul'>{name}</h2>
                    <p className='comet'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam,
                        mollitia sunt molestias eligendi itaque unde temporibus aliquid distinctio
                        enim ab aut minus nisi, culpa, totam libero error soluta velit.
                    </p>
                </div>
            </div>

        </>
    )
}
