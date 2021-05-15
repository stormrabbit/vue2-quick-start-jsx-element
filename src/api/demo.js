import api from '../plugins/axios'

export const requestDemo = async() => await api.get('http://angrykitty.link:40439/v1/events')