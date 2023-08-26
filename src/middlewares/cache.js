import getExpeditiousCache from 'express-expeditious';

const defaultOptions = {
    namespace: 'expresscache',
    defaultTtl: '1 minute',
    statusCodesExpires: {
        404: '5 minutes',
        500: 0
    }
};

export const cache = getExpeditiousCache(defaultOptions);