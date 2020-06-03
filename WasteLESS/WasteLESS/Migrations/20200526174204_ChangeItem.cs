using Microsoft.EntityFrameworkCore.Migrations;

namespace WasteLESS.Migrations
{
    public partial class ChangeItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Ideal",
                table: "Items",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ideal",
                table: "Items");
        }
    }
}
