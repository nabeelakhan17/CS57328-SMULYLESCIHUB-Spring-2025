import { ReportHandler } from 'web-vitals';

const reportWebVitals: (onPerfEntry?: ReportHandler) => void = (onPerfEntry?: ReportHandler): void => {
    if (onPerfEntry) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }): void => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
