import '../../assets/css/Stage.css';

import carside from '../../assets/images/car-side.svg';
import kevisual from '../../assets/images/kevisual.svg';

function Stage({ image1, image2, image3, ...props }) {

    return (
        <div className="stage-wrapper">
            <div className="images">
                <img src={carside} className="car" />
                <img src={kevisual} className="kevisual" />
            </div>
        </div>
    );
}

export default Stage;