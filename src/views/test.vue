<script>
export default {
    data() {
        return {
            str: 'jsx'
        }
    },
    computed: {
        hello() {
            return 'hello'
        }
    },
    render() {
        return <div value={this.str} vOn:click={this.handleClick}>{this.hello}, {this.str}</div>
    },
    methods: {
        handleClick() {
            console.log('on-click');
        }
    }
}
</script>