import React from 'react'
import './styles/works.css'
import works from '../../utils/works'
import Work from '../Works/Work';

const Works = () => {

    return (
        <div className='works sec' id='works'>
            <div className="content-works hiddenRight">

                <div className="text-works grilla">
                    <h3 className='sub-title'>Mis proyectos</h3>
                    <h4>Un poco de lo que hago</h4>
                </div>

                <div className="box-projects">
                    {
                        works.map(work => (
                            <Work
                                key={work.id}
                                work={work}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Works