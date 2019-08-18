import logger from '../../utils/logger'

export default function (root, args, ctx, info) {
    try {
        const { serviceName, environmentName, data, type } = args
        ctx.dataSources.updateConfig(serviceName, environmentName, data, type)
        return {
            success: true
        }
    } catch (e) {
        logger.log({ level: "error", message: e.message })
        return { success: false, error: e.message }
    }
}