/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Carousel from 'react-bootstrap/Carousel';
import './Card.css'


const Card = (props) => {
    const mappingImg = props.item.images ?
        props.item.images.map((i, k) => (
            <Carousel.Item>
                <img className='d-block w-100 rounded slideImg' key={k} src={i} />
            </Carousel.Item>
        )) : <Carousel.Item>
            <img className='d-block w-100' alt='' src="https://plus.unsplash.com/premium_photo-1664464228938-0fcef7296c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />

        </Carousel.Item>
    return (
        <div className="col-md-3 col-lg-3 col-xl- col-sm-12">
            <div class="card border border-0 p-2" style={{ width: '18rem' }}>
                <Carousel>
                    {mappingImg}
                    {/* <Carousel.Item>
                        <img className='d-block w-100' alt='' src="https://plus.unsplash.com/premium_photo-1664464228938-0fcef7296c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' alt='' src="https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' alt='' src="https://plus.unsplash.com/premium_photo-1664464228938-0fcef7296c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />

                    </Carousel.Item> */}
                </Carousel>
                <div class="card-body text-start">
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold m-0'>
                            {props.item.city + ", " + props.item.country}

                        </p>
                        <i class="bi bi-star">4.55</i>

                    </div>
                    <p className='m-0 text-secondary'>300 Km</p>
                    <p className='m-0 text-secondary'>{props.item.startDate + " - " + props.item.endDate}</p>
                    <p className='m-0 text-secondary'><span className='fw-semibold'>{Math.round(Math.random() * (100 - 75) + 75)}$</span> Noite</p>
                </div>
            </div>
        </div>
    )
}

export default Card
