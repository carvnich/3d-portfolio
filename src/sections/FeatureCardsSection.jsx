import {abilities} from "../constants/index.js";

const FeatureCardsSection = () => {
    return (
        <div className="2-full padding-x-lg">
            <div className="mx-auto grid-3-cols">
                {abilities.map(({imgPath, title, desc}, index) => (
                    <div key={index} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath} alt={title}/>
                        </div>
                        <h3 className="text-white text-2xl font-semibold">{title}</h3>
                        <p className="text-white-50 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCardsSection;
