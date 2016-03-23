/**
 * Created by quann on 3/23/2016.
 */
"use strict";

var list = function() {
    var list = function () {
        function Node(data) {
            this.data = data;
            this.next = null;
        }

        var l = {
            length: 0,
            currentNode: null,
            head: new Node(null),
            add: function(e) {
                if (l.currentNode === null) { // This is true the first time
                    l.head.data = e;
                    l.currentNode = new Node(null);
                    l.head.next = l.currentNode;
                    l.length++;
                }
                else {
                    l.currentNode.data = e;
                    var node = new Node(null);
                    l.currentNode.next = node;
                    l.currentNode = node;
                    l.length++;
                }
            },
        };

        var F = function () {
        };
        var f = new F();

        // public data
        f.run = function (e) {
            return l[e];
        };
        f.first = f.car = function () {
            return l.head.data
        };
        f.rest = f.cdr = function () {
            if(l.length > 0) {
                l.head = l.head.next;
                l.length--;
            }
            return this;
        }
        f.concat = f.cons = function(e){
            if (typeof e === 'string' || e instanceof String) {l.add(e);}
            else {
                var n = e.run('head');
                for(var i = 0; i < e.run('length'); i++) {
                    l.add(n.data);
                    n = n.next;
                }
            }
        }
        f.length = function(){return l.length};
        f.map = function(f){
            if (f instanceof Function) {
                var n = l.head;
                for(var i = 0; i < l.length; i++) {
                    n.data = f(n.data);
                    n = n.next;
                }
            }
        }
        f.iterator = function(){
            var current = l.head;
            var iter = function() {
                if (current.data != null) {
                    var data = current.data;
                    current = current.next;
                    return data;
                } else {return "End of List";}
            }
            return iter;
        }

        return f;
    }();
    return list;
};

var l1 = new list();
l1.cons('a')
l1.cons('b')
l1.cons('c')
l1.cons('d')
l1.cons('e')
var h = l1.run('head');
document.writeln("<BR>l1: " + h.data);
for(var i = 1; i < l1.length(); i++) {
    h = h.next;
    document.writeln(", " + h.data);
}

var n = l1.iterator();
document.writeln("<BR>" + n());
document.writeln("<BR>" + n());
document.writeln("<BR>" + n());
document.writeln("<BR>" + n());
document.writeln("<BR>" + n());
document.writeln("<BR>" + n());
document.writeln("<BR>" + n());


