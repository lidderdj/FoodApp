import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer RkwZbsmRCLy7faumYq5snaClv5pGaFSsuhM9sqrsy0novr4IPtE5G8R__W89WVKdfTrVColEll1epL-afr6Jbut1HDS5Pr95oCqtNyuCao_PbqVY34Q4rOhRy-1wXXYx'
  }

})
