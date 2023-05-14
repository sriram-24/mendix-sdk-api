// var mitchTree = require('d3-mitch-tree');

// var data = {
//     id:1,
//     name:"Script API",
//     children:[
//         {
//             id:2,
//             name:'Administrator',
//             children:[
//                 {
//                     id:3,
//                     name:"System.Administrator"
//                 },
//                 {
//                     id:4,
//                     name:"Administration.Administrator"
//                 },
//                 {
//                     id:5,
//                     name:"MyFirstModule.User"
//                 }
//             ]
//         },
//         {
//             id:6,
//             name:"User",
//             children:[
//                 {
//                     id:7,
//                     name:"System.User"
//                 },
//                 {
//                     id:8,
//                     name:"MyFirstModule.User"
//                 },
//                 {
//                     id:9,
//                     name:"Administration.User"
//                 }
            
//             ]
//         }
//     ]
// }

// const getDataFromAPI =  async() => {
//     const url = 'http://localhost:4000/project/secuirty'
//     await fetch(url,{
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     }).then(async newdata => {
//         let json = newdata.json()
//         let last = await json
//         console.log(last);
//         const data = last
        

let data = {
    id: 1,
    name: "2cb63d13-77fe-43c7-aeb9-0ed64101b468",
    children: [
      {
        id: 8,
        name: "Administrator",
        children: [
          {
            id: 0,
            name: "Administration.Administrator"
          },
          {
            id: 1,
            name: "MxModelReflection.ModelAdministrator"
          },
          {
            id: 2,
            name: "MxModelReflection.Readonly"
          },
          {
            id: 3,
            name: "MxModelReflection.TokenUser"
          },
          {
            id: 4,
            name: "WorkflowCommons.Administrator"
          },
          {
            id: 5,
            name: "WorkflowCommons.User"
          },
          {
            id: 6,
            name: "System.Administrator"
          },
          {
            id: 7,
            name: "MyFirstModule.User"
          }
        ]
      },
      {
        id: 12,
        name: "User",
        children: [
          {
            id: 9,
            name: "Administration.User"
          },
          {
            id: 10,
            name: "System.User"
          },
          {
            id: 11,
            name: "MyFirstModule.User"
          }
        ]
      },
      {
        id: 18,
        name: "Principal",
        children: [
          {
            id: 13,
            name: "Administration.User"
          },
          {
            id: 14,
            name: "WorkflowCommons.Adm"
          },
          {
            id: 15,
            name: "WorkflowCommons.User"
          },
          {
            id: 16,
            name: "System.User"
          },
          {
            id: 17,
            name: "MyFirstModule.Principal"
          }
        ]
      },
      {
        id: 24,
        name: "Hod",
        children: [
          {
            id: 19,
            name: "Administration.User"
          },
          {
            id: 20,
            name: "WorkflowCommons.Administrator"
          },
          {
            id: 21,
            name: "WorkflowCommons.User"
          },
          {
            id: 22,
            name: "System.User"
          },
          {
            id: 23,
            name: "MyFirstModule.Hod"
          }
        ]
      },
      {
        id: 31,
        name: "FA",
        children: [
          {
            id: 25,
            name: "Administration.Administrator"
          },
          {
            id: 26,
            name: "DatabaseConnector.User"
          },
          {
            id: 27,
            name: "WorkflowCommons.Administrator"
          },
          {
            id: 28,
            name: "WorkflowCommons.User"
          },
          {
            id: 29,
            name: "System.User"
          },
          {
            id: 30,
            name: "MyFirstModule.FA"
          }
        ]
      },
      {
        id: 44,
        name: "Student",
        children: [
          {
            id: 32,
            name: "Administration.User"
          },
          {
            id: 33,
            name: "WorkflowCommons.Administrator"
          },
          {
            id: 34,
            name: "WorkflowCommons.User"
          },
          {
            id: 35,
            name: "System.User"
          },
          {
            id: 36,
            name: "MyFirstModule.Student"
          },
          {
            id: 37,
            name: "MyFirstModule.User"
          },
          {
            id: 38,
            name: "json.student"
          },
          {
            id: 39,
            name: "API.student"
          },
          {
            id: 40,
            name: "Module.student"
          },
          {
            id: 41,
            name: "api2.student"
          },
          {
            id: 42,
            name: "Rest_api.student"
          },
          {
            id: 43,
            name: "Module_2.student"
          }
        ]
      },
      {
        id: 55,
        name: "UserRole",
        children: [
          {
            id: 45,
            name: "MxModelReflection.ModelAdministrator"
          },
          {
            id: 46,
            name: "MxModelReflection.Readonly"
          },
          {
            id: 47,
            name: "MxModelReflection.TokenUser"
          },
          {
            id: 48,
            name: "System.User"
          },
          {
            id: 49,
            name: "MyFirstModule.UserRole"
          },
          {
            id: 50,
            name: "json.UserRole"
          },
          {
            id: 51,
            name: "API.UserRole"
          },
          {
            id: 52,
            name: "Module.UserRole"
          },
          {
            id: 53,
            name: "api2.UserRole"
          },
          {
            id: 54,
            name: "EmailTemplate.Administrator"
          }
        ]
      },
      {
        id: 64,
        name: "student_2",
        children: [
          {
            id: 56,
            name: "System.User"
          },
          {
            id: 57,
            name: "MyFirstModule.student_2"
          },
          {
            id: 58,
            name: "json.student_2"
          },
          {
            id: 59,
            name: "API.student_2"
          },
          {
            id: 60,
            name: "Module.student_2"
          },
          {
            id: 61,
            name: "api2.student_2"
          },
          {
            id: 62,
            name: "EmailTemplate.student_2"
          },
          {
            id: 63,
            name: "Rest_api.student_2"
          }
        ]
      }
    ]
  }
    
var treePlugin = new d3.mitchTree.boxedTree()
.setData(data)
.setElement(document.getElementById("visualisation"))
.setIdAccessor(function(data) {
    return data.id;
})
.setChildrenAccessor(function(data) {
    return data.children;
})
.setBodyDisplayTextAccessor(function(data) {
    return "this is a text";
})
.setTitleDisplayTextAccessor(function(data) {
    return data.name;
})
.initialize();

var nodes = treePlugin.getNodes();
        nodes.forEach(function(node, index, arr) {
            treePlugin.expand(node);
            if(index==3){
                // treePlugin.nodeFocus(node)
            }
            
        });
        console.log(treePlugin);
        treePlugin.update(treePlugin.getRoot());

        document.getElementById('focusButton').addEventListener('click', function(){
            var value = document.getElementById('focusText').value;
            var nodeMatchingText = treePlugin.getNodes().find(function(node){
                return node.data.name == value;
            });
            if (nodeMatchingText)
                treePlugin.focusToNode(nodeMatchingText);
            else if (value != null)
                treePlugin.focusToNode(value);
        });

    // })
    
   


// }

// getDataFromAPI()