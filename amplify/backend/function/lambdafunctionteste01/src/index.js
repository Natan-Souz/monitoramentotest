

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(event)
    const customerId = event.pathParameters.customerId;
    const customer = {
        customerId: 'customerId',
        customerName: 'customer' + customerId};
    
    const response = {
        statusCode: 200,
        // disable cors requests
        Headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(customer),
    };
    return response
};
