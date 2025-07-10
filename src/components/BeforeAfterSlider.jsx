import ReactCompareImage from 'react-compare-image';

export default function BeforeAfterSlider({ before, after, height = '400px' }) {
    return (
        <div style={{ height }}>
            <ReactCompareImage
                leftImage={before}
                rightImage={after}
                sliderLineColor="#FFFFFF"
                sliderLineWidth={4}
                handleSize={40}
            />
        </div>
    );
}
