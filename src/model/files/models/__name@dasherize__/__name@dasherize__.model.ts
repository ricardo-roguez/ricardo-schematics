
export class <%= classify(name) %>Model {
    static readonly properties = {<%
    for (let n of entitiesList) {  %>
        <%= n.name %>: '<%= n.name %>',<%
    }%>
    };

<% for (let n of entitiesList) {  %>
    private _<%= n.name %>: <%= n.type %>;<%
}%>
<% for (let n of entitiesList) {  %>
    get <%= n.name %>(): <%= n.type %> {
        return this._<%= n.name %>;
    }

    set <%= n.name %>(value: <%= n.type %>) {
        this._<%= n.name %> = value;
    }
<% } %>
<% for (let n of entitiesList) {  %>
    set<%= classify(n.name) %>(value: <%= n.type %>) {
        this._<%= n.name %> = value;
        return this;
    }
<% } %>
}
