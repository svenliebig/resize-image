export class Size {

    /**
     * @param {number} size The size in bytes
     */
    constructor(size) {
        this.bytes = size
        this.kilobytes = (this.bytes / 1000).toFixed(1)
        this.megabytes = (this.bytes / 1000 / 1000).toFixed(1)
    }

    toString() {
        if (this.megabytes >= 1) {
            return `${this.megabytes} MB`
        }


        if (this.kilobytes >= 1) {
            return `${this.kilobytes} KB`
        }

        return `${this.bytes} B`
    }
}