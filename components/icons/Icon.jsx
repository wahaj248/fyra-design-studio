import React from 'react'
import styles from '../../app/marque.module.css'

function Icon() {
  return (
    <div id={styles.marquebg} className="container-fluid overflow-hidden">
        <div className="row">
            <div className="col-12 flex gap-3 justify-center py-5">
                <a href='#'><img className='w-14 h-14 sm:w-40 sm:h-32' src="/images/phoneicon.png" alt="" /></a>
                <a href='#'><img className='w-14 h-14 sm:w-40 sm:h-32' src="/images/ordericon.png" alt="" /></a>
                <a href='#'><img className='w-14 h-14 sm:w-40 sm:h-32'src="/images/liveicon.png" alt="" /></a>
                <a href='#'><img className='w-14 h-14 sm:w-40 sm:h-32' src="/images/usaicon.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Icon
