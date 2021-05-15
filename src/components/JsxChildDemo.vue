<script>
export default {
    props: {
        childValue: {
            type: String,
            default: '默认值啊'
        } 
    },
    render() {
        const {
            childValue
        } = this;
        return <div>{childValue}</div>
    }
}
</script>

<style>

</style>