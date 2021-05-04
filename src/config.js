const UIComponents = {}
const UIname = []
import City from '@/components/Base/city.vue'
import My from '@/components/Base/my.vue'
import Location from '@/components/Base/location.vue'
import Lunbo from '@/components/Base/lunbo.vue'
UIComponents[City.name] = City
UIComponents[My.name] = My
UIComponents[Location.name] = Location
UIComponents[Lunbo.name] = Lunbo
UIname.push({
    name: City.name
})
UIname.push({
    name: My.name
})
UIname.push({
    name: Location.name
})
UIname.push({
    name: Lunbo.name
})

export default {
    UIComponents,
    UIname
}