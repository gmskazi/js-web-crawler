import { crawlPage } from './crawl.js'

async function main() {
    const args = process.argv.slice(2);
    if (args.length > 1) {
        console.log('too many arguments received')
        return
    } else if (args.length < 1) {
        console.log('no website provided')
        return
    }
    const baseURL = args[0]
    console.log(`starting crawl of: ${baseURL}...`)

    await crawlPage(baseURL)
}

main()
